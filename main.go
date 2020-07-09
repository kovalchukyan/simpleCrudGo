package main

import (
	"database/sql"
	"fmt"
	"html/template"
	"log"
	"net/http"
	"strconv"

	_ "github.com/lib/pq"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "postgres"
	password = "Pass123"
	dbname   = "godb"
)

type Customer struct {
	Customerid int
	Firstname  string
	Lastname   string
	Age        int64
	Gender     string
	Email      string
	City       string
}

var db *sql.DB

func init() {
	var err error
	dbInfo := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err = sql.Open("postgres", dbInfo)
	if err != nil {
		log.Fatal(err)
	}

	if err = db.Ping(); err != nil {
		log.Fatal(err)
	}
}

func main() {
	http.HandleFunc("/", mainPage)
	http.HandleFunc("/create", createCustomer)
	http.HandleFunc("/delete", deleteCustomer)
	http.HandleFunc("/edit", editCustomer)

	port := ":8080"
	println("Server is listening on port:", port)
	err := http.ListenAndServe(port, nil)
	if err != nil {
		log.Fatal("ListenAndServe", err)
	}

}

type CustomersData struct {
	Customers []Customer
}

func mainPage(w http.ResponseWriter, r *http.Request) {
	rows, err := db.Query("SELECT * FROM customers ORDER BY firstname ASC")
	if err != nil {
		log.Fatal("DB selection error", err)
	}
	var customers []Customer
	var customer Customer

	for rows.Next() {
		err = rows.Scan(&customer.Customerid, &customer.Firstname,
			&customer.Lastname, &customer.Age, &customer.Gender,
			&customer.Email, &customer.City)
		if err != nil {
			log.Fatal("Row error", err)
		}
		customers = append(customers, Customer{Customerid: customer.Customerid, Firstname: customer.Firstname,
			Lastname: customer.Lastname, Age: customer.Age, Gender: customer.Gender, Email: customer.Email, City: customer.City})
	}

	//...
	tmpl, err := template.ParseFiles("static/index.html")
	if err != nil {
		http.Error(w, err.Error(), 400)
		return
	}
	tmpl.Execute(w, customers)
}

func createCustomer(w http.ResponseWriter, r *http.Request) {
	var customer Customer
	customer.Firstname = r.FormValue("inputFirstName")
	customer.Lastname = r.FormValue("inputLastName")
	customer.City = r.FormValue("inputAddress")
	customer.Email = r.FormValue("inputEmail")
	customer.Age, _ = strconv.ParseInt(r.FormValue("inputAge"), 10, 64)
	customer.Gender = r.FormValue("inputGender")

	_, err := db.Exec("INSERT INTO customers (firstname, lastname, age, gender, email, city) VALUES($1, $2, $3, $4, $5, $6)",
		customer.Firstname, customer.Lastname, customer.Age, customer.Gender, customer.Email, customer.City)
	if err != nil {
		log.Fatal("Insertion error", err)
	}

	http.Redirect(w, r, "/", 301)
}

func deleteCustomer(w http.ResponseWriter, r *http.Request) {
	var deleteId, _ = strconv.ParseInt(r.FormValue("deleteId"), 10, 64)
	_, err := db.Exec("DELETE FROM customers WHERE customerid=$1;", deleteId)
	if err != nil {
		log.Fatal("Delete customer error", err)
	}

	http.Redirect(w, r, "/", 301)
}

func editCustomer(w http.ResponseWriter, r *http.Request) {
	var editID, _ = strconv.ParseInt(r.FormValue("editCustomerId"), 10, 64)
	var editAge = r.FormValue("inputEditAge")
	var editEmail = r.FormValue("inputEditEmail")
	var editCity = r.FormValue("inputEditAddress")

	_, err := db.Exec("UPDATE customers SET age = $1, email = $2, city = $3 WHERE customerid = $4",
		editAge, editEmail, editCity, editID)
	if err != nil {
		log.Fatal("Edit customer error", err)
	}

	http.Redirect(w, r, "/", 301)
}
