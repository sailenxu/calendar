import { get} from './request';
const BASE_URL = '/test/';
export function getTagList() {
    return get(BASE_URL + 'hello');
}