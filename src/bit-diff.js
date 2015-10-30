import can from "can";
import template from "./bit-diff.stache!";
import BitDiffVM from './viewmodel';
import './bit-diff.less!';
import 'bit-tabs';

/**
 * @module {can.Component} bit-diff.components.bit-diff <bit-diff>
 * @parent bit-diff.components 0
 *
 * @author Kyle Gifford
 *
 *
 * @description
 * Diff!
 *
 * @signature '<bit-diff></bit-diff>'
 *
 * @body
 *
 * ## Component Initialization
 *
 * ```html
 * <bit-diff old-text="old text" new-text="new text"></bit-diff>
 * ```
 */
can.Component.extend({
    tag: "bit-diff",
    template: template,
    viewModel: BitDiffVM,
    // events: {
    //     inserted: function() {
    //         this.viewModel.makeDiff();
    //     }
    // }
});

export default BitDiffVM;