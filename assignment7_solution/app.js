(function () {
    'use strict';
    
    angular.module('ShoppingListCheckOff', [])
    .controller('ToBuyController', ToBuyController)
    .controller('AlreadyBoughtController', AlreadyBoughtController)
    .service('ShoppingListCheckOffService', ShoppingListCheckOffService)
    .filter('superDollarSign', superDollarSignFilter)
    
    ToBuyController.$inject = ['ShoppingListCheckOffService'];
    function ToBuyController(ShoppingListCheckOffService) {
        var toBuyList = this;

        toBuyList.toBuyItems = ShoppingListCheckOffService.getToBuyItems()

        toBuyList.buyItem = function (itemIndex) {
            ShoppingListCheckOffService.buyItem(itemIndex)
        }
    };


    AlreadyBoughtController.$inject = ['ShoppingListCheckOffService'];
    function AlreadyBoughtController(ShoppingListCheckOffService) {
        var boughtList = this;
        boughtList.boughtItems = ShoppingListCheckOffService.getBoughtItems()
        boughtList.displayTotalPrice = function (quantity, price) { 
            var msg = 'for total price of $' + quantity * price
            return msg
        }
        
    };
    
    function ShoppingListCheckOffService() {
        var service = this;
      
        var toBuyItems = [
            {
                name: 'cookie',
                quantity: 10,
                pricePerItem: 2
            },
            {
                name: 'apple',
                quantity: 5,
                pricePerItem: 3
            },
            {
                name: 'orange',
                quantity: 77,
                pricePerItem: 12
            },
            {
                name: 'banana',
                quantity: 11,
                pricePerItem: 8
            },
            {
                name: 'peach',
                quantity: 24,
                pricePerItem: 7
            },
        ];
        var boughtItems = [];

        service.buyItem = function (itemIndex) {
 
          boughtItems.push(toBuyItems[itemIndex])
          toBuyItems.splice(itemIndex, 1);
        
        };
      
      
        service.getToBuyItems = function () {
          return toBuyItems;
        };

        service.getBoughtItems = function () {
            return boughtItems;
          };
        
      }


      function superDollarSignFilter() {
        return function (input, target, replace) {
            input = input || "";
            input = input.replace(target, replace);
            return input;
        };
      }

    })();
    