import api from '../api.json';
import { normalize, schema } from 'normalizr';

//const category = new schema.Entity(key, definicion_de_mi_esquema, opciones);

const media = new schema.Entity('media', {}, {
	idAttribute: 'id',
	processStrategy: (value, parent, key) => ({...value, category: parent.id})
});
const category = new schema.Entity('categories', {
	playlist: new schema.Array(media)
});

const categories = { categories: new schema.Array(category) }
const normalizedData = normalize(api, categories);

export default normalizedData;