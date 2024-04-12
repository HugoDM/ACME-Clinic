import { render, fireEvent } from '@testing-library/react';
import { RegisterPatientPopUp } from './RegisterPatientPopUp';
import { Patient } from '../../Models/Patient';
import { PatientGender } from '../../Models/Enums/PatientGender';
import { PatientStatus } from '../../Models/Enums/PatientStatus';
import '@testing-library/jest-dom'

describe('RegisterPatientPopUp component', () => {

    test('Should only enable button-Cadastrar when all informations except address have data', () => {
        const { getByPlaceholderText, getByTestId } = render(<RegisterPatientPopUp open={true} onClose={() => { }} onChange={() => { }} />);

        const registerButton = getByTestId('button-Cadastrar');

        fireEvent.change(getByPlaceholderText('Nome do paciente'), { target: { value: 'Usuário' } })
        fireEvent.change(getByPlaceholderText('dd/mm/aaaa'), { target: { value: '01012000' } });

        expect(registerButton).toBeDisabled();

        fireEvent.change(getByPlaceholderText('000.000.000-00'), { target: { value: '275.267.840-22' } });

        expect(registerButton).not.toBeDisabled();
    })

    test('Should renders error message when trying to register patient with duplicate TaxNumber', () => {

        const { getByPlaceholderText, getByTestId, getByText } = render(<RegisterPatientPopUp open={true} onClose={() => { }} onChange={() => { }} />);

        var patient: Patient = {
            Address: '',
            Name: 'Usuário 1',
            TaxNumber: '275.267.840-12',
            BirthDate: '11/02/2000',
            Gender: PatientGender.Male,
            Status: PatientStatus.Active,
        }

        localStorage.setItem('PatientsList', JSON.stringify([patient]));

        fireEvent.change(getByPlaceholderText('Nome do paciente'), { target: { value: 'Usuário 1' } })
        fireEvent.change(getByPlaceholderText('dd/mm/aaaa'), { target: { value: '01012000' } });
        fireEvent.change(getByPlaceholderText('000.000.000-00'), { target: { value: '275.267.840-12' } });

        fireEvent.click(getByTestId('button-Cadastrar'));

        const errorMessage = getByText('CPF já cadastrado!');
        expect(errorMessage).toBeInTheDocument();
    });
});