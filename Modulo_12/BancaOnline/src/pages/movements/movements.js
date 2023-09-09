import { history } from '../../core/router';
import { api } from './movements.api';
import { mappers } from './movements.mappers';
import { addMovementRows } from './movements.helpers';
import { onSetValues } from '../../common/helpers';

let account = {
  iban: '',
  alias: '',
  balance: '',
};


const params = history.getParams();


const giveMeDetailsAccount = Boolean(params.id);
if (giveMeDetailsAccount) {
  api.getAccount(params.id).then((result) => {
    console.log(result);
    onSetValues(mappers.accountFromApiToVm(result));
  });
}else{
  api.getAllMovements().then((result) => {
    addMovementRows(mappers.movementsFromApiToVm(result));
  });
}


api.getMovements(params.id).then((result) => {
  addMovementRows(mappers.movementsFromApiToVm(result));
});
