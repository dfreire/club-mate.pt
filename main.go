package main

import (
	"github.com/labstack/echo"
)

func main() {
	e := echo.New()
	e.Static("/", "public")
	e.ServeFile("/en/:whatever", "public/index.html")
	e.ServeFile("/pt/:whatever", "public/index.html")
	e.Run(":3000")
}
