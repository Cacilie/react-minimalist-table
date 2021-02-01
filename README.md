# A minimalist full responsive react table

## Getting started
type this in your proyect to use it:
`npm i -s react-minimalist-table`


![alt full table](https://github.com/Cacilie/react-minimalist-table/blob/master/public/table1.png)

it is fully responsive

```
    <CTable 
        caption={"Data"}
        data={Data}
        conditionalCellStyle={
        [
            {
            columns: ['id'],
            styleTrue: {
                color: 'red'
            },
            styleFalse: {
                color: 'green'
            },
            validation: function(value){
                if(value  === 1) return true
                else return false
            } 
            }
        ]
        }
    />

```

Where 

**caption** *the title of your table*

**data** just a json-array with the data you want to display,
e.g
````

    [{
        columnName: cellValue,
        columnName2: cellValue2,
    }]
`````

**conditionalCellStyle** *It is possible to add some conditional styles to the cells of the table*

e.g.

If you want to color the text of a cell if the value of that cell is 1,


````
conditionalCellStyle={
        [
            {
            columns: ['id'],
            styleTrue: {
                color: 'red'
            },
            styleFalse: {
                color: 'green'
            },
            validation: function(value){
                if(value  === 1) return true
                else return false
            } 
            }
        ]
````

Where 
    **columns** are the columns that are affected by this conditional style, 
    **styleTrue** the style that is going to be applyed if the condition is matched
    **styleFalse** the style that is going to be applyed if the condition is mismatched,
    **validation** it is a function which must return true or false (indicating if the condition was matched)



There are also another props like 
    
    
    headerColor: PropTypes.string,

    headerTextColor: PropTypes.string,

    primaryColor: PropTypes.string,

    secondaryColor: PropTypes.string,

    


This is just a getting started guide, if you want deeper knowladge, i am writing a bigger documentation file that, as soons as i finished, i will share here.

Thank you very much for using this Package, i hope it help you.

