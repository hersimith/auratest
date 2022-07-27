({
    sumClientController : function(component, event, helper) {
            var numberX = component.get("v.xNum");
            var numberY = component.get("v.yNum");
            //var result = numberX+numberY;
            //component.set("v.result",result);
            //console.log(component);

            var serverController = component.get("c.sumServerController");
            serverController.setParams(
                {
                   "num1" : numberX,
                   "num2" :numberY,        

                }
            );

            serverController.setCallback(this,function(response){
                component.set("v.result",response.getReturnValue());
            console.log(response);
        }
            );
            $A.enqueueAction(serverController);
        },
        subClientController : function(component, event, helper) {
            var numberX = component.get("v.xNum");
            var numberY = component.get("v.yNum");
            //var result = numberX-numberY;
            //component.set("v.result",result);

            var serverController = component.get("c.subServerController");
            serverController.setParams(
                {
                   "num1" : numberX,
                   "num2" :numberY,        

                }
            );

            serverController.setCallback(this,function(response){
                component.set("v.result",response.getReturnValue());
            console.log(response);
        }
            );
            $A.enqueueAction(serverController);

        }

})

