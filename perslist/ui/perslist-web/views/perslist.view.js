sap.ui.jsview("views.perslist", {
 oFirstNameField : null, oLastNameField : null,
 getControllerName : function() { return "views.perslist"; },
 
 createContent : function(oController) { // Create an instance of the table control 
 var oTable = new sap.ui.table.Table({ title : "Persons List", visibleRowCount : 6,   firstVisibleRow : 3, selectionMode : sap.ui.table.SelectionMode.Single});
// add TableToolbar 
var oTableToolbar = new sap.ui.commons.Toolbar();
// add first name field 
var oFirstNameLabel = new sap.ui.commons.Label({ text : 'First Name' }); 
this.oFirstNameField = new sap.ui.commons.TextField({ id : 'firstNameFieldId', value : '',   width : '10em'});  
oFirstNameLabel.setLabelFor(this.oFirstNameField);  oTableToolbar.addItem(oFirstNameLabel);  oTableToolbar.addItem(this.oFirstNameField);
// add last name field 
var oLastNameLabel = new sap.ui.commons.Label({ text : 'Last Name' }); 
this.oLastNameField = new sap.ui.commons.TextField({ id : 'lastNameFieldId', value : '',   width : '10em'});  
oLastNameLabel.setLabelFor(this.oLastNameField);  oTableToolbar.addItem(oLastNameLabel);  oTableToolbar.addItem(this.oLastNameField);
// add button 
var oAddPersonButton = new sap.ui.commons.Button({ id : 'addPersonButtonId',   text : "Add Person", press : function() {    oController.addNewPerson();   } });  
oTableToolbar.addItem(oAddPersonButton);  
oTable.setToolbar(oTableToolbar);
// define the columns and the control templates to be used  
oTable.addColumn(new sap.ui.table.Column({   
        label : new sap.ui.commons.Label({ text : "First Name" }),   
        template : new sap.ui.commons.TextView().bindProperty("text", "FIRSTNAME"),   
        sortProperty : "FIRSTNAME", filterProperty : "FIRSTNAME", width : "100px" }));  
oTable.addColumn(new sap.ui.table.Column({   
    label : new sap.ui.commons.Label({ text : "Last Name" }),   
    template : new sap.ui.commons.TextView().bindProperty("text", "LASTNAME"),   
    sortProperty : "LASTNAME", filterProperty : "LASTNAME", width : "200px" }));
// bind table rows to /Persons based on the model defined in the init method of the // controller (aggregation binding)  
oTable.bindRows("/Persons");
return oTable; },
 getFirstNameField : function() { return this.oFirstNameField; },
 getLastNameField : function() { return this.oLastNameField; }
});
