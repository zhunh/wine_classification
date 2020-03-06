package main

import (
	"fmt"
	"io/ioutil"
	"log"
	// "os"
)

func main() {
	// pwd,_ := os.Getwd()
	fileInfoList,err := ioutil.ReadDir(`/Users/znh/Desktop/wine_demo/威士忌`)
	if err != nil {
		log.Fatal(err)
	}
	fmt.Println(string(fileInfoList))
}
