import { binding, then, when} from 'cucumber-tsflow';
import { AxiosResponse } from 'axios';
import { ITrot } from '../../../src/trot/model/trot.i';
import axios from 'axios';
import { assert } from 'chai';
import { threadLocals } from './context';

@binding()
export class StepDefsTropDelete {

    @when(/^he want to delete a trot with name (.*)$/)
    public async he_want_to_delete_a_trot_with_it_s_name_trot(name: string)  {
        const service = axios.create({
            baseURL: 'http://localhost:3000',
        });
        const response: AxiosResponse<ITrot> = await service.delete<ITrot>(`/api/v1/trots/${name}`);
        threadLocals.set(typeof response, response);
    }

    @then('the trot is deleted')
    public the_trot_is_deleted() {
        let response: AxiosResponse<ITrot>;
        response = threadLocals.get(typeof response);
        assert.equal(response.status, 204);
    }
}
