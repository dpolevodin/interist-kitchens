import { EffectorNext } from '@effector/next';
import { allSettled, fork, serialize } from 'effector';
import { registrationPage } from '@/page-content/registrationPage/model';
import { RegistrationPage } from '@/page-content/registrationPage';

export default async function Page() {
    const scope = fork();

    await allSettled(registrationPage.open, { scope });

    const values = serialize(scope);

    return (
        <EffectorNext values={values}>
            <RegistrationPage />
        </EffectorNext>
    );
}
