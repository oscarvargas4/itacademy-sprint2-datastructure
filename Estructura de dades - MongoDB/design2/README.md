


### To load the file in mongo:

1. Remember to run `mongod` daemon process for the MongoDB system (It handles data requests, manages data access, and performs background management operations):
    ```
    mongod --dbpath=<paste your absolute path here for your data file>
    ```

    
2. Open mongo shell or execute this comand in your PowerShell Terminal:
    ```
    mongo
    ```

3. Execute this commnd with absolute path ("c:\\scriptmongodb\\creacion.js" is an example path):
    ```
    load("c:\\scriptmongodb\\creacion.js")
    ```


### Utilities:
- ('Instructions to load the file in Mongo shell')[https://www.tutorialesprogramacionya.com/mongodbya/detalleconcepto.php?punto=26&codigo=26&inicio=20]    