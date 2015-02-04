# chosenAngular
A angular directive for the [Chosen jQuery plugin](http://harvesthq.github.io/chosen/options.html)Chosen jQuery plugin.


### Example
```js
angular.module("yourApp", []).controller("yourCtrl", yourCtrl)
function yourCtrl(){
  var vm = this;
  vm.exampleList = ['my', 'very', 'energetic', 'mother', 'just', 'served', 'us', 'nine', undefined];
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

This would create a chosen select box with exampleList as the options, has a placeholder of "Look for stuff", says "Nuthin" if no results match the input, has a maximum of 3 things selected at a time, is 500px long, transcludes the button with "Click Me" underneath the select box, and runs exampleFunc on the parent controller on submit or when the transcluded button is clicked.
