/*global QUnit*/

jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

sap.ui.require([
	"sap/ui/test/Opa5",
	"zjblesson/Market/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zjblesson/Market/test/integration/pages/Worklist",
	"zjblesson/Market/test/integration/pages/Object",
	"zjblesson/Market/test/integration/pages/NotFound",
	"zjblesson/Market/test/integration/pages/Browser",
	"zjblesson/Market/test/integration/pages/App"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zjblesson.Market.view."
	});

	sap.ui.require([
		"zjblesson/Market/test/integration/WorklistJourney",
		"zjblesson/Market/test/integration/ObjectJourney",
		"zjblesson/Market/test/integration/NavigationJourney",
		"zjblesson/Market/test/integration/NotFoundJourney"
	], function () {
		QUnit.start();
	});
});