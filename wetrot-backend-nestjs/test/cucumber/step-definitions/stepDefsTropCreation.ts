import { binding, given, then, when} from 'cucumber-tsflow';
import { AxiosResponse } from 'axios';
import { TrotDto } from '../../../src/trot/model/trotDto';
import { ITrot } from '../../../src/trot/model/trot.i';
import axios from 'axios';
import { UserDto } from '../../../src/user/model/userDto';
import { assert } from 'chai';

@binding()
export class StepDefsTropCreation {

    trot: TrotDto = new TrotDto();
    response: AxiosResponse<ITrot>;

    @given('an admin user existing in the system')
    public givenAnAdminUserExistingInSystem() {
        const user: UserDto = new UserDto();
        user.firstname = 'emilin';
        user.lastname = 'dadie';
        user.email = 'dadie.emilin@gmail.com';
        user.age = 25;
    }

    @given(/^a Trot of brand (.*) and of name (.*)$/)
    public givenATrotOfBrandOfName(brand: string, name: string) {
        this.trot.brand = brand;
        this.trot.name = name;
        this.trot.batteryCapacity = 5500;
        this.trot.currentBatteryLevel = 2000;
        this.trot.usury = 0;
        this.trot.wearLife = 990;
    }

    @when('he want to create a trot')
    public async create()  {
        const service = axios.create({
            baseURL: 'http://localhost:3000',
        });
        this.response = await service.post<ITrot>('/api/v1/trots', this.trot);
    }

    @then('the trot is created')
    public trotShouldBeCreated() {
        assert.equal(this.response.status, 201);
    }
}
