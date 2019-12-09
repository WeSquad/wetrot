import { binding, given, then, when} from 'cucumber-tsflow';
import { AxiosResponse } from 'axios';
import { TrotDto } from '../../../src/trot/model/trotDto';
import { ITrot } from '../../../src/trot/model/trot.i';
import axios from 'axios';
import { UserDto } from '../../../src/user/model/userDto';
import { assert } from 'chai';
import { threadLocals } from './context';
import * as uuid from 'uuid';

@binding()
export class StepDefsTropCreation {

    @given('an admin user existing in the system')
    public an_admin_user_existing_in_the_system() {
        const user: UserDto = new UserDto();
        user.firstname = 'emilin';
        user.lastname = 'dadie';
        user.email = 'dadie.emilin@gmail.com';
        user.age = 25;
        threadLocals.set(UserDto, user);
    }

    @given(/^a Trot of brand (.*) and of name (.*)$/)
    public a_Trot_of_brand_Xiaomi(brand: string, name: string) {
        const trot: TrotDto = new TrotDto();
        trot.uuid = uuid.v4();
        trot.brand = brand;
        trot.name = name;
        trot.batteryCapacity = 5500;
        trot.localization = '48.8534;2.3488',
        trot.currentBatteryLevel = 2000;
        trot.usury = 0;
        trot.wearLife = 990;
        threadLocals.set(TrotDto, trot);
    }

    @when('he want to create a trot')
    public async he_want_to_create_a_trot()  {
        const service = axios.create({
            baseURL: 'http://localhost:3000',
        });
        const response: AxiosResponse<ITrot> = await service.post<ITrot>('/api/v1/trots', threadLocals.get(TrotDto));
        threadLocals.set(typeof response, response);
    }

    @then('the trot is created')
    public the_trot_is_created() {
        let response: AxiosResponse<ITrot>;
        response = threadLocals.get(typeof response);
        assert.equal(response.status, 201);
    }
}
