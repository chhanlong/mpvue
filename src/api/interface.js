import { createAjaxAction } from '@/service'
import * as ajax from '@/service/ajax'

const getToken = ajax.flyJSONByGet('api/home/homeTemplate');
export const flyGetToken = createAjaxAction(getToken);
