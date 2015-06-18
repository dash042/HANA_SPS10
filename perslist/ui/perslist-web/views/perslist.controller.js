sap.ui.controller("views.perslist", {
 onInit : function() { 
     var sOrigin = window.location.protocol + "//" + window.location.hostname    + (window.location.port ? ":" + window.location.port : ""); 
     var persListOdataServiceUrl = sOrigin    + "/C5228559/perslist/services/pers.xsodata"; 
     var odataModel = new sap.ui.model.odata.ODataModel(persListOdataServiceUrl); this.getView().setModel(odataModel); },

addNewPerson : function() { 
    var firstName = this.getView().getFirstNameField().getValue(); 
    var lastName = this.getView().getLastNameField().getValue();
    var persons = {};  persons.ID = "1";  persons.FIRSTNAME = firstName;  persons.LASTNAME = lastName; this.getView().getModel()    
    .create("/Persons", persons, null, this.successMsg, this.errorMsg); 
},

successMsg : function() {  sap.ui.commons.MessageBox.alert("Person entity has been successfully created"); },
errorMsg : function() {  sap.ui.commons.MessageBox.alert("Error occured when creating person entity"); },
onAfterRendering : function() { this.getView().getFirstNameField().focus(); } 

    
});