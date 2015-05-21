package main

import (
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.Static("/", "public")
	e.ServeFile("/sobre-o-club-mate", "public/index.html")
	e.ServeFile("/yerba-mate", "public/index.html")
	e.ServeFile("/cocktails", "public/index.html")
	e.ServeFile("/onde-encontrar", "public/index.html")
	e.ServeFile("/contactos", "public/index.html")
	e.Run(":3000")
}
