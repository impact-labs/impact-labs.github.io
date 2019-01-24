(function() {
  var template = Handlebars.template, templates = Handlebars.templates = Handlebars.templates || {};
templates['members.handleBars'] = template({"1":function(container,depth0,helpers,partials,data) {
    var helper, alias1=depth0 != null ? depth0 : (container.nullContext || {}), alias2=helpers.helperMissing, alias3="function", alias4=container.escapeExpression;

  return "        <div class=\"col-4 p-5\">\n          <div class=\"container\">\n            <!-- Modal Trigger -->\n            <a data-toggle=\"modal\" data-target=\"#bio1\">\n              <div>\n                <img class=\"mb-5\" src=\"../assets/teamphotos/"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + ".png\" />\n                <h3>"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n                <p class=\"lead\">"
    + alias4(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"role","hash":{},"data":data}) : helper)))
    + "</p>\n              </div>\n            </a>\n            <!-- Modal Content -->\n            <div class=\"modal fade\" id=\"bio1\" role=\"dialog\" aria-hidden=\"true\">\n              <div class=\"modal-dialog full-modal\">\n                <div class=\"vertical-alignment-helper\">\n                  <div class=\"modal-dialog vertical-align-center\">\n                    <div class=\"modal-content\">\n                      <div class=\"modal-header\">\n                        <a class=\"close\" data-dismiss=\"modal\" aria-hidden=\"true\">×</a>\n                      </div>\n                      <div class=\"modal-body\">\n                        <div class=\"row bio-row\">\n                          <div class=\"col-4 text-center\">\n                            <img class=\"mb-5\" src=\"../assets/images/sample2.png\" />\n                          </div>\n                          <div class=\"col-8\">\n                            <h3 class=\"bio-name\">"
    + alias4(((helper = (helper = helpers.name || (depth0 != null ? depth0.name : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"name","hash":{},"data":data}) : helper)))
    + "</h3>\n                            <p class=\"font-italic\">"
    + alias4(((helper = (helper = helpers.role || (depth0 != null ? depth0.role : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"role","hash":{},"data":data}) : helper)))
    + "</p>\n                            <p>"
    + alias4(((helper = (helper = helpers.about || (depth0 != null ? depth0.about : depth0)) != null ? helper : alias2),(typeof helper === alias3 ? helper.call(alias1,{"name":"about","hash":{},"data":data}) : helper)))
    + "</p>\n                          </div>\n                        </div>\n                      </div>\n                    </div>\n                  </div>\n                </div>\n              </div>\n            </div>\n          </div>\n        </div>\n";
},"compiler":[7,">= 4.0.0"],"main":function(container,depth0,helpers,partials,data) {
    var stack1;

  return ((stack1 = (helpers.list || (depth0 && depth0.list) || helpers.helperMissing).call(depth0 != null ? depth0 : (container.nullContext || {}),(depth0 != null ? depth0.members : depth0),{"name":"list","hash":{},"fn":container.program(1, data, 0),"inverse":container.noop,"data":data})) != null ? stack1 : "");
},"useData":true});
})();