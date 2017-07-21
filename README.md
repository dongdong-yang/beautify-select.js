# display-value-as-column.js

## Since moden browsers cannot format options of select, so here is a tricky solution to enable it. 

>**This solution is very tricky and smart, great idea comes from *dkellner*, check the link in bottom.**

![2017-07-21_15-22-47](https://user-images.githubusercontent.com/25354610/28479160-36d57792-6e29-11e7-91a4-c3d2679b7a5f.png)

You can call your existing select by following method
```
    var items={
      "gandalf":"Gandalf",
      "harry":"Harry Potter",
      "jon":"Jon Snow",
      "tony":"Tony Stark",
      "steve":"Steven Rogers",
      "natasha":"Natasha Romanova",
    }

    $('#you-id').DisplayValueAsColumn(items);

```

The function will wrap your select with following html archtechture.
```
<div class="display-value-as-column">
    <label>not required</label>
    <span>
    	<select class='display-select' >
        </select>
        <br>
    	<select class='value-select' id='you-id' size='options length'>
    	</select>
    </span>
</div>
```


you can get your selected value by orignal method.
```
$('#you-id').val();
```

enjoy it

Idea comes form: https://jsfiddle.net/dkellner/7ac9us70/

Test References: https://jsfiddle.net/stupidong/o6ep4ea2/

Beauty references: https://codepen.io/ericrasch/pen/zjDBx
