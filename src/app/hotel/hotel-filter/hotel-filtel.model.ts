/**
 * Filter model interface.
 * @export
 * @interface FilterModel
 */
export interface FilterModel {
    searchLabel: string;
    starOptions: StarOptions[];
}

/**
 * Star options inteface.
 * @interface StarOptions
 */
interface StarOptions {
    name: string;
    value: string;
    checked: boolean;
}
