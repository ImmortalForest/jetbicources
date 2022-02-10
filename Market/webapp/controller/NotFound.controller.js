sap.ui.define([
		"zjblesson/Market/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("zjblesson.Market.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);