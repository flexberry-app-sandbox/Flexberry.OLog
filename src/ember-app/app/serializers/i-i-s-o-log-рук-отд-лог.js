import { Serializer as РукОтдЛогSerializer } from
  '../mixins/regenerated/serializers/i-i-s-o-log-рук-отд-лог';
import __ApplicationSerializer from './application';

export default __ApplicationSerializer.extend(РукОтдЛогSerializer, {
  /**
  * Field name where object identifier is kept.
  */
  primaryKey: '__PrimaryKey'
});
