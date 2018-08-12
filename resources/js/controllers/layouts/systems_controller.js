import {Controller} from "stimulus";

export default class extends Controller {

    /**
     * Stimulus gives the possibility of a change event when the field loses focus
     */
    filter(event) {

        let search = event.target.value.trim().toLowerCase();

        $(".admin-element-item").hide().filter(() => {
            return $(this).html().trim().toLowerCase().indexOf(search) !== -1;
        }).show();

        $(".admin-element").show().filter(() => {
            return $(this).children('.list-group').children(":visible").length === 0;
        }).hide();
    }
}