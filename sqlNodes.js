/* var data = [] */
function ORNode()
{
  this.addProperty("nodeName","ORNode")
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A or B","string");
  //this.properties = { precision: 1 };
}

//name to show
ORNode.title = "OR";

//function to call when the node is executed
ORNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  var output = '('+A +' OR ' +B +')'

  this.setOutputData( 0,output );
  arrayCode[this.id]=output
}

//register in the system
LiteGraph.registerNodeType("operators/OR", ORNode );


//////////////////////////////////////////////////////////////////
function ANDNode()
{
  this.addProperty("nodeName","AndNode")
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A AND B","string");
  //this.properties = { precision: 1 };
}

//name to show
ANDNode.title = "AND";

//function to call when the node is executed
ANDNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  var output = '('+A +' AND ' +B +')'
  this.setOutputData( 0, output);
  arrayCode[this.id]=output
}

//register in the system
LiteGraph.registerNodeType("operators/AND", ANDNode );

///////////////////////////////////////////////////////////////////////

function equalNode()
{
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A = B","string");
  //this.properties = { precision: 1 };
}

//name to show
equalNode.title = "=";

//function to call when the node is executed
equalNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  this.setOutputData( 0, '('+A +' = ' +B +')' );
}

//register in the system
/* LiteGraph.registerNodeType("operators/equal", equalNode ); */

//////////////////////////////////////////////////////////////////////////
function notequalNode()
{
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A != B","string");
  //this.properties = { precision: 1 };
}

//name to show
notequalNode.title = "!=";

//function to call when the node is executed
notequalNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  this.setOutputData( 0, '('+A +' != ' +B +')' );
}

//register in the system
/* LiteGraph.registerNodeType("operators/notequal", notequalNode ); */
////////////////////////////////////greater than////////////////////////////////////////

function greaterThanNode()
{
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A > B","string");
  //this.properties = { precision: 1 };
}

//name to show
greaterThanNode.title = ">";

//function to call when the node is executed
greaterThanNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  this.setOutputData( 0, '('+A +' > ' +B +')' );
}
 
//register in the system
/* LiteGraph.registerNodeType("operators/greaterthan", greaterThanNode ); */
////////////////////////////////////less than////////////////////////////////////////

function lessThanNode()
{
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A < B","string");
  //this.properties = { precision: 1 };
}

//name to show
lessThanNode.title = "<";

//function to call when the node is executed
lessThanNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  this.setOutputData( 0, '('+A +' < ' +B +')' );
}
 
//register in the system
/* LiteGraph.registerNodeType("operators/lessthan", lessThanNode ); */
/////////////////////////////////greater than or equal/////////////////
function greaterThanOrEqualNode()
{
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A >= B","string");
  //this.properties = { precision: 1 };
}

//name to show
greaterThanOrEqualNode.title = ">=";

//function to call when the node is executed
greaterThanOrEqualNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  this.setOutputData( 0, '('+A +' >= ' +B +')' );
}
 
//register in the system
/* LiteGraph.registerNodeType("operators/greaterThanOrEqual", greaterThanOrEqualNode ); */

//////////////////////////////////less than or equal/////////////////////////
function lessThanOrEqualNode()
{
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("A <= B","string");
  //this.properties = { precision: 1 };
}

//name to show
lessThanOrEqualNode.title = "<=";

//function to call when the node is executed
lessThanOrEqualNode.prototype.onExecute = function()
{
  var A = this.getInputData(0);
  if( A === undefined )
    A = '';
  var B = this.getInputData(1);
  if( B === undefined )
    B = '';
  this.setOutputData( 0, '('+A +' <= ' +B +')' );
}
 
//register in the system
/* LiteGraph.registerNodeType("operators/lessThanOrEqual", lessThanOrEqualNode ); */
////////////////////////////////Between/////////////////////////////////

function betweenNode()
{ this.addProperty("nodeName","betweenNode")
  this.addInput("Field","string");
  this.addInput("A","string");
  this.addInput("B","string");
  this.addOutput("between A and B","string");
  //this.properties = { precision: 1 };
}

//name to show
betweenNode.title = "between";

//function to call when the node is executed
betweenNode.prototype.onExecute = function()
{ 
  var field = this.getInputData(0);
  if( field === undefined )
    field = '';
  var A = this.getInputData(1);
  if( A === undefined )
    A = '';
  var B = this.getInputData(2);
  if( B === undefined )
    B = '';
  var output = '('+field +' BETWEEN ' +A+' AND '+B +')'
  this.setOutputData( 0, output );

}
 
//register in the system
LiteGraph.registerNodeType("operators/between", betweenNode );

////////////////////////////////////////////////////////////////////////////

function constString() {
  this.addOutput("", "string");
  this.addProperty("value", "");
  this.widget = this.addWidget(
      "text",
      "value",
      "",
      this.setValue.bind(this)
  );
  this.widgets_up = true;
  this.size = [100, 30];
}

constString.title = "Const String";
constString.desc = "Constant string";

constString.prototype.setValue = function(v) {
  this.properties.value = v;
};

constString.prototype.onPropertyChanged = function(name, value) {
  this.widget.value = value;
};

/* myString.prototype.getTitle = ConstantNumber.prototype.getTitle; */

constString.prototype.onExecute = function() {
  var out =  `'${this.properties["value"]}'`
  this.setOutputData(0, out);
};

/* LiteGraph.registerNodeType("constants/string", constString); */

///////////////////////////////////const number/////////////////////////////////////////
function ConstNumber() {
  this.addOutput("value", "string");
  this.addProperty("value", "0");
}

ConstNumber.title = "Const Number";
ConstNumber.desc = "Constant number";

ConstNumber.prototype.onExecute = function() {
  var out = this.properties["value"].toString()
  this.setOutputData(0, out);
};

ConstNumber.prototype.getTitle = function() {
  if (this.flags.collapsed) {
      return this.properties.value;
  }
  return this.title;
};

ConstNumber.prototype.setValue = function(v) {
  this.properties.value = v;
};

 ConstNumber.prototype.onDrawBackground = function(ctx) {
  //show the current value
  this.outputs[0].label = this.properties["value"];
}; 

/* LiteGraph.registerNodeType("constants/constNumber", ConstNumber); */

////////////////////////////fields///////////////////////////
function fieldsNode()
{
  //this.addOutput("","string");
  //this.properties = { precision: 1 };
}

fieldsNode.prototype.onGetOutputs = function() {
  return [
      ["id", "string"],
      ["type", "string"],
      ["fee", "string"],
      ["timestamp", "string"],
      ["signature", "string"],
      ["recipient", "string"],
      ["amount", "string"],
      ["height", "string"],
      ["sender", "string"],
      ["senderPublicKey", "string"],
      ["assetId", "string"],
      ["name", "string"],
      ["description", "string"],
      ["quantity", "string"],
      ["decimals", "string"],
      ["reissuable", "string"],
      ["feeAsset", "string"],
      ["attachement", "string"],
      ["order1_id", "string"],
      ["order1_senderPublicKey", "string"],
      ["order1_matcherPublicKey", "string"],
      ["order1_assetPair_amountAsset", "string"],
      ["order1_assetPair_priceAsset", "string"],
      ["order1_orderType", "string"],
      ["order1_price", "string"],
      ["order1_amount", "string"],
      ["order1_timestamp", "string"],
      ["order1_expiration", "string"],
      ["order1_matcherFee", "string"],
      ["order1_signature", "string"],

      ["order2_id", "string"],
      ["order2_senderPublicKey", "string"],
      ["order2_matcherPublicKey", "string"],
      ["order2_assetPair_amountAsset", "string"],
      ["order2_assetPair_priceAsset", "string"],
      ["order2_orderType", "string"],
      ["order2_price", "string"],
      ["order2_amount", "string"],
      ["order2_timestamp", "string"],
      ["order2_expiration", "string"],
      ["order2_matcherFee", "string"],
      ["order2_signature", "string"],

      ["price", "string"],
      ["buyMatcherFee", "string"],
      ["sellMatcherFee", "string"],
      ["leaseId", "string"],
      ["alias", "string"],
      ["attachement", "string"],
      ["data_key", "string"],
      ["data_type", "string"],
      ["data_value", "string"],
      ["script", "string"],
      ["minSponsoredAssetFee", "string"],

   
  ];
};

//name to show
fieldsNode.title = "field";

//function to call when the node is executed
fieldsNode.prototype.onExecute = function()
{

if(this.outputs){
  
  var field = this.outputs[0].name;

      switch(field) {
        case 'id':
          // code block
          out = 'id'
          this.setOutputData(0, out);
          break;
        case 'type':
          // code block
          out = 'type'
          this.setOutputData(0, out);
          break;
          case 'fee':
          // code block
          out = 'fee'
          this.setOutputData(0, out);
          break;
          case 'timestamp':
          // code block
          out = 'timestamp'
          this.setOutputData(0, out);
          break;
          case 'signature':
          // code block
          out = 'signature'
          this.setOutputData(0, out);
          break;
          case 'recipient':
          // code block
          out = 'recipient'
          this.setOutputData(0, out);
          break;
          case 'amount':
          // code block
          out = 'amount'
          this.setOutputData(0, out);
          break;
          case 'height':
          // code block
          out = 'height'
          this.setOutputData(0, out);
          break;
          case 'sender':
          // code block
          out = 'sender'
          this.setOutputData(0, out);
          break;
          case 'senderPublicKey':
          // code block
          out = 'senderPublicKey'
          this.setOutputData(0, out);
          break;
          case 'assetId':
          // code block
          out = 'assetId'
          this.setOutputData(0, out);
          break;
          case 'name':
            // code block
            out = 'name'
            this.setOutputData(0, out);
            break;
            case 'description':
          // code block
          out = 'description'
          this.setOutputData(0, out);
          break;
          case 'quantity':
          // code block
          out = 'quantitiy'
          this.setOutputData(0, out);
          break;
          case 'decimals':
          // code block
          out = 'decimals'
          this.setOutputData(0, out);
          break;
          case 'reissuable':
          // code block
          out = 'reissuable'
          this.setOutputData(0, out);
          break;
          case 'feeAsset':
          // code block
          out = 'feeAsset'
          this.setOutputData(0, out);
          break;
          case 'attachement':
          // code block
          out = 'attachement'
          this.setOutputData(0, out);
          break;
          case 'order1_id':
          // code block
          out = 'order1_id'
          this.setOutputData(0, out);
          break;
          case 'order1_senderPublicKey':
          // code block
          out = 'order1_senderPublicKey'
          this.setOutputData(0, out);
          break;
          case 'order1_matcherPublicKey':
          // code block
          out = 'order1_matcherPublicKey'
          this.setOutputData(0, out);
          break;
          case 'order1_assetPair_amountAsset':
          // code block
          out = 'order1_assetPair_amountAsset'
          this.setOutputData(0, out);
          break;
          case 'order1_assetPair_priceAsset':
          // code block
          out = 'order1_assetPair_priceAsset'
          this.setOutputData(0, out);
          break;
          case 'order1_orderType':
          // code block
          out = 'order1_orderType'
          this.setOutputData(0, out);
          break;
          case 'order1_price':
          // code block
          out = 'order1_price'
          this.setOutputData(0, out);
          break;
          case 'order1_amount':
          // code block
          out = 'order1_amount'
          this.setOutputData(0, out);
          break;
          case 'order1_timestamp':
          // code block
          out = 'order1_timestamp'
          this.setOutputData(0, out);
          break;
          case 'order1_expiration':
          // code block
          out = 'order1_expiration'
          this.setOutputData(0, out);
          break;
          case 'order1_matcherFee':
          // code block
          out = 'order1_matcherFee'
          this.setOutputData(0, out);
          break;
          case 'order1_signature':
          // code block
          out = 'order1_signature'
          this.setOutputData(0, out);
          break;
        
          ////////order2////
          case 'order2_id':
          // code block
          out = 'order2_id'
          this.setOutputData(0, out);
          break;
          case 'order2_senderPublicKey':
          // code block
          out = 'order2_senderPublicKey'
          this.setOutputData(0, out);
          break;
          case 'order2_matcherPublicKey':
          // code block
          out = 'order2_matcherPublicKey'
          this.setOutputData(0, out);
          break;
          case 'order2_assetPair_amountAsset':
          // code block
          out = 'order2_assetPair_amountAsset'
          this.setOutputData(0, out);
          break;
          case 'order2_assetPair_priceAsset':
          // code block
          out = 'order2_assetPair_priceAsset'
          this.setOutputData(0, out);
          break;
          case 'order2_orderType':
          // code block
          out = 'order2_orderType'
          this.setOutputData(0, out);
          break;
          case 'order2_price':
          // code block
          out = 'order2_price'
          this.setOutputData(0, out);
          break;
          case 'order2_amount':
          // code block
          out = 'order2_amount'
          this.setOutputData(0, out);
          break;
          case 'order2_timestamp':
          // code block
          out = 'order2_timestamp'
          this.setOutputData(0, out);
          break;
          case 'order2_expiration':
          // code block
          out = 'order2_expiration'
          this.setOutputData(0, out);
          break;
          case 'order2_matcherFee':
          // code block
          out = 'order2_matcherFee'
          this.setOutputData(0, out);
          break;
          case 'order2_signature':
          // code block
          out = 'order2_signature'
          this.setOutputData(0, out);
          break;

          case 'price':
            // code block
            out = 'price'
            this.setOutputData(0, out);
            break;
            case 'buyMatcherFee':
            // code block
            out = 'buyMatcherFee'
            this.setOutputData(0, out);
            break;
            case 'sellMatcherFee':
            // code block
            out = 'sellMatcherFee'
            this.setOutputData(0, out);
            break;
            case 'leaseId':
            // code block
            out = 'leaseId'
            this.setOutputData(0, out);
            break;
            case 'alias':
            // code block
            out = 'alias'
            this.setOutputData(0, out);
            break;
            case 'attachement':
            // code block
            out = 'attachement'
            this.setOutputData(0, out);
            break;
            case 'data_key':
            // code block
            out = 'data_key'
            this.setOutputData(0, out);
            break;
            case 'data_type':
            // code block
            out = 'data_type'
            this.setOutputData(0, out);
            break;
            case 'data_value':
            // code block
            out = 'data_value'
            this.setOutputData(0, out);
            break;
            case 'script':
            // code block
            out = 'script'
            this.setOutputData(0, out);
            break;
            case 'minSponsoredAssetFee':
            // code block
            out = 'minSponsoredAssetFee'
            this.setOutputData(0, out);
            break;


      }
    

}
  
}
 
//register in the system
/* LiteGraph.registerNodeType("DataFields/fields", fieldsNode ); */

//////////////////////////////////showCode button//////////////////
function ShowCodeButton() {
  //this.addOutput("", LiteGraph.EVENT);
  //this.addOutput("", "boolean");
  this.addInput("","string")
  this.addProperty("text", "click me");
  this.addProperty("font_size", 30);
  this.addProperty("message", "");
  this.size = [164, 84];
  this.clicked = false;
}

ShowCodeButton.title = "Show Query";
ShowCodeButton.desc = "Triggers an event";

ShowCodeButton.font = "Arial";
ShowCodeButton.prototype.onDrawForeground = function(ctx) {
  if (this.flags.collapsed) {
      return;
  }
  var margin = 10;
  ctx.fillStyle = "black";
  ctx.fillRect(
      margin + 1,
      margin + 1,
      this.size[0] - margin * 2,
      this.size[1] - margin * 2
  );
  ctx.fillStyle = "#AAF";
  ctx.fillRect(
      margin - 1,
      margin - 1,
      this.size[0] - margin * 2,
      this.size[1] - margin * 2
  );
  ctx.fillStyle = this.clicked
      ? "white"
      : this.mouseOver
      ? "#668"
      : "#334";
  ctx.fillRect(
      margin,
      margin,
      this.size[0] - margin * 2,
      this.size[1] - margin * 2
  );

  if (this.properties.text || this.properties.text === 0) {
      var font_size = this.properties.font_size || 30;
      ctx.textAlign = "center";
      ctx.fillStyle = this.clicked ? "black" : "white";
      ctx.font = font_size + "px " + ShowCodeButton.font;
      ctx.fillText(
          this.properties.text,
          this.size[0] * 0.5,
          this.size[1] * 0.5 + font_size * 0.3
      );
      ctx.textAlign = "left";
  }
};

ShowCodeButton.prototype.onMouseDown = function(e, local_pos) {
  if (
      local_pos[0] > 1 &&
      local_pos[1] > 1 &&
      local_pos[0] < this.size[0] - 2 &&
      local_pos[1] < this.size[1] - 2
  ) {
      this.clicked = true;
      if (this.clicked && this.getInputData(0)!=undefined){
      alert('FROM '+table+' WHERE '+this.getInputData(0))
      }else
      console.log('no statement found!');
      

      this.triggerSlot(0, this.properties.message);
    
      
      return true;
  }
};

ShowCodeButton.prototype.onExecute = function() {
  this.setOutputData(1, this.clicked);
};

ShowCodeButton.prototype.onMouseUp = function(e) {
  this.clicked = false;
};

LiteGraph.registerNodeType("Query/", ShowCodeButton);

//////////////////field-condition//////////////
var tables=['type_10','type_5','type_12','type_7','type_16','type_3','type_5','type_8','type_9','type_4','type_11','type_13','type_15']
tableNames= [
  "Alias",
  "Burn",
  "Data",
  "Exchange",
  "Invokescript",
  "Issue",
  "Reissue",
  "Lease",
  "Cancel lease",
  "Transfer",
  "Mass transfer",
  "Set script",
  "Set asset script"
]  
function fieldNode()
{ 
  this.addProperty("tableName","")
  this.addProperty("Txtype","")
  this.addProperty("nodeName","fieldNode")
    this.addWidget("combo","Txtype",'',function (v){that.setProperty("Txtype",v);that.setProperty("tableName",tables[tableNames.indexOf(v)])},{values:tableNames})

    this.addOutput("","string");
    this.addProperty("field","")
    this.addWidget("combo","field",'',function (v){that.setProperty("field",v);},{values:[
      "id",
      "type", 
      "fee", 
      "timestamp", 
      "signature", 
      "recipient", 
      "amount", 
      "height", 
      "sender", 
      "senderPublicKey", 
      "assetId", 
      "name", 
      "description", 
      "quantity", 
      "decimals", 
      "reissuable", 
      "feeAsset", 
      "attachement", 
      "order1_id", 
      "order1_senderPublicKey", 
      "order1_matcherPublicKey", 
      "order1_assetPair_amountAsset", 
      "order1_assetPair_priceAsset", 
      "order1_orderType", 
      "order1_price", 
      "order1_amount", 
      "order1_timestamp", 
      "order1_expiration", 
      "order1_matcherFee", 
      "order1_signature", 
  
      "order2_id", 
      "order2_senderPublicKey", 
      "order2_matcherPublicKey", 
      "order2_assetPair_amountAsset", 
      "order2_assetPair_priceAsset", 
      "order2_orderType", 
      "order2_price", 
      "order2_amount", 
      "order2_timestamp", 
      "order2_expiration", 
      "order2_matcherFee", 
      "order2_signature", 
  
      "price", 
      "buyMatcherFee", 
      "sellMatcherFee", 
      "leaseId", 
      "alias", 
      "attachement", 
      "data_key", 
      "data_type", 
      "data_value", 
      "script", 
      "minSponsoredAssetFee", "string"
  ]
  })
    var that=this
    this.addWidget("combo","operator",'',function (v){ that.setProperty("operator",v)
   
    ;},{values:[
      'equal',
      'greater than',
      'greater or equal',
      'less than',
      'less or equal',
      'not equal'  
      ]
  })
  //this.properties = { precision: 1 };
  this.addProperty("value","")
  var that=this
    this.name_widget = this.addWidget(
        "text",
        "value",
        this.properties.value,
        function(v) {
            if (!v) {
                return;
            }
            that.setProperty("value",v);

        }
    );
    this.widgets_up = false;
}

//name to show
fieldNode.title = "condition";

//function to call when the node is executed
fieldNode.prototype.onRemoved=function(){
  arrayCode = arrayCode.filter(function(value, index, arr){
    return value != this.id;

});
  
}
var globalTableName = []
fieldNode.prototype.onExecute = function()
{ 
  var field = this.properties.field
  var operator = this.properties.operator
  var value = this.properties.value

  
  if( field === undefined )
  field = '';
  if( operator === undefined )
  operator = '';
  /* else operator == 'equal'
  operator = '=' */
  if( value === undefined )
  value = '';
  else if (isNaN(value))
  value = '"'+value+'"'

  switch(operator) {
    case 'equal':
      operator = '='
      break;
    case 'greater than':
      operator = '>'
      break;
      case 'greater or equal':
      operator = '>='
      break;
      case 'less than':
      operator = '<'
      break;
      case 'less or equal':
      operator = '<='
      break;
      case 'not equal':
      operator = '<>'
      break;
    
      // code block
  }

  var output = field + operator + value
  this.setOutputData(0,output)
  arrayCode[this.id]=output
  
  /* console.log('here: '+JSON.stringify(this.id)); */
  
}

//register in the system
LiteGraph.registerNodeType("condition/fieldNode", fieldNode );