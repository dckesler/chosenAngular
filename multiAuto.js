(function(){
    angular
        .module("multiAutoApp", [])
        .directive("multiAuto", multiAuto);
    function multiAuto($timeout){
        return {
            restrict: "E",
            scope: {
                callFunc: "&",
                selectValues: "=",
                maxChoices: "@",
                boxWidth: "@",
                noResultText: "@",
                placeholderText: "@"
            },
            link: function(scope, elem, attrs){
                var vm = scope.multiAuto;

                $timeout(function(){
                    var optionObj = {};
                    if(vm.maxChoices){
                        optionObj.max_selected_options = Number(vm.maxChoices);
                    }
                    if(vm.boxWidth){
                        optionObj.width = vm.boxWidth;
                    }
                    if(vm.noResultText){
                        optionObj.no_results_text = vm.noResultText;
                    }
                    if(vm.placeholderText){
                        optionObj.placeholder_text_multiple = vm.placeholderText;
                    }
                    $("#multiAutoInput").chosen(optionObj);
                });
            },
            controllerAs: "multiAuto",
            controller: function(){
                var vm = this;

                vm.check = check;
                vm.call = call;


                function check(){
                    console.log(vm.inputField);
                }
                function call(){
                    console.log("here");
                    vm.callFunc()(vm.inputField);
                }


            },
            bindToController: true,
            transclude: true,
            template:
            '<form ng-submit="multiAuto.call()">'+
                '<select class="chosen-select" multiple ng-model="multiAuto.inputField" id="multiAutoInput" ng-options="option for option in multiAuto.selectValues">' +
                '</select>' +
            '</form>' +
            '<div style="display:inline-block" ng-transclude ng-click="multiAuto.call()"></div>'
        }
    }
})();