import { User } from '../models/models.js';
import CRUDService from './crud.js';
export default class extends CRUDService{
    constructor(){
        super(User);
    }
}
