package main

import (
	"github.com/labstack/echo"
)

func main() {
	urls := []string{
		"/sobre-o-club-mate",
		"/yerba-mate",
		"/cocktails",
		"/textos",
		"/onde-encontrar",
		"/contactos",
	}

	e := echo.New()
	e.Static("/", "public")
	for _, url := range urls {
		e.ServeFile(url, "public/index.html")
	}
	e.Run(":3000")
}
