# chosenAngular
A angular directive for the [Chosen jQuery plugin](http://harvesthq.github.io/chosen/options.html).


### Example
```js
angular.module("yourApp", []).controller("yourCtrl", yourCtrl)
function yourCtrl(){
  var vm = this;
  vm.exampleList = [{label: "Label", value: "Value", group: "Group One"}, {label: "Label 2", value: "Value 2", group: "Group Two"}];
  vm.exampleFunc = exampleFunc;
  
  function exampleFunc(results){
    console.log(results)
  }
}
```
```html
<div ng-controllerAs="yourCtrl as ctrl">
  <multi-auto call-func="ctrl.exampleFunc" select-values="ctrl.exampleList" max-choices="3" box-width="500px"       no-result-text="Nuthin" placeholder-text="Look for stuff">
    <button>Click Me</button>
  </multi-auto>
</div>
```

This would create a chosen select box with the options that appear as the label properties of the exampleList, grouped by the group properties, and with the value properties as the actual values of what one selects.
It also has a placeholder of "Look for stuff", says "Nuthin" if no results match the input, has a maximum of 3 things selected at a time, is 500px long, transcludes the button with "Click Me" underneath the select box, and runs exampleFunc on the parent controller on submit or when the transcluded button is clicked.
