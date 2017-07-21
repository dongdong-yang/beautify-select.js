# display-value-as-column.js

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

    $('#test-select').DisplayValueAsColumn(items);

```

You can apply it with html format, but you have to impliment your own event
```
<div class="display-value-as-column">
    <label>not required</label>
    <span>
    	<select class='display-select' >
      </select>
      <br>
    	<select class='value-select' >
    	</select>
    </span>
</div>
```

enjoy it

Test References: https://jsfiddle.net/stupidong/o6ep4ea2/

Beauty references: https://codepen.io/ericrasch/pen/zjDBx
