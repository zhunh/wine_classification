package main

import (
	"fmt"
	"io/ioutil"
	"log"
	"os"
)

func main() {
	pwd,_ := os.Getwd()
	// fileInfoList,err := ioutil.ReadDir(`/Users/znh/Desktop/wine_demo/伏特加`)	
	fileInfoList,err := ioutil.ReadDir(pwd)
	if err != nil {
		log.Fatal(err)
	}
	var []string names
	for _; filename = range fileInfoList{
		names.push(filename.Name())
	}
	fmt.Println(fileInfoList[0].Name())
}
