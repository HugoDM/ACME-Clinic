import { render, fireEvent, screen } from '@testing-library/react';
import { Home } from './Home';
import '@testing-library/jest-dom'

describe('Home component', () => {

    test('Should render HomePage with Logo, PatientManagement and PatientsTable', () => {

        const { getByTestId } = render(<Home />);

        const logoDiv = getByTestId('logo');
        const patientManagementDiv = getByTestId('patient-management');
        const patientsTableDiv = getByTestId('patients-table');

        expect(logoDiv).toBeInTheDocument();
        expect(patientManagementDiv).toBeInTheDocument();
        expect(patientsTableDiv).toBeInTheDocument();
    });

    test('Should not render RegisterPatientPopUp at the beginning', () => {
        const { getByTestId } = render(<Home />);

        expect(() => getByTestId('register-patient-popup')).toThrow();
    });

    test('Should render RegisterPatientPopUp when button is clicked', () => {
        const { getByTestId } = render(<Home />);

        expect(() => getByTestId('register-patient-popup')).toThrow();

        const button = getByTestId('button-Cadastrar-Paciente');
        fireEvent.click(button);

        expect(getByTestId('register-patient-popup')).toBeInTheDocument();
    });

    test('Patient should be visible after been added', () => {
        const { getByTestId, getByText } = render(<Home />);

        const openPopupButton = getByTestId('button-Cadastrar-Paciente');
        fireEvent.click(openPopupButton);

        fireEvent.change(getByTestId('input-Nome-Completo'), { target: { value: 'João' } })
        fireEvent.change(getByTestId('input-Data-de-Nascimento'), { target: { value: '01012000' } });
        fireEvent.change(getByTestId('input-CPF'), { target: { value: '275.267.840-12' } });
        
        fireEvent.click(getByTestId('button-Cadastrar'));

        const patientName = getByText('João');
        expect(patientName).toBeInTheDocument();

    });

    test('Search by name should show patients correctly', () => {
        const { getByTestId, getByText, queryByText } = render(<Home />);

        const openPopupButton = getByTestId('button-Cadastrar-Paciente');

        //Cadastrar o paciente João
        fireEvent.click(openPopupButton);

        fireEvent.change(getByTestId('input-Nome-Completo'), { target: { value: 'João' } })
        fireEvent.change(getByTestId('input-Data-de-Nascimento'), { target: { value: '01012000' } });
        fireEvent.change(getByTestId('input-CPF'), { target: { value: '275.267.840-12' } });
        
        fireEvent.click(getByTestId('button-Cadastrar'));
        
        //Cadastrar a paciente Maria
        fireEvent.click(openPopupButton);

        fireEvent.change(getByTestId('input-Nome-Completo'), { target: { value: 'Maria' } })
        fireEvent.change(getByTestId('input-Data-de-Nascimento'), { target: { value: '01012000' } });
        fireEvent.change(getByTestId('input-CPF'), { target: { value: '275.267.840-13' } });
        
        fireEvent.click(getByTestId('button-Cadastrar'));

        //Coloca o valor 'João' no campo de busca
        const searchInput = getByTestId('input-Buscar-Paciente');
        fireEvent.change(searchInput, {target: {value: 'João'}});

        expect(getByText('João')).toBeInTheDocument();
        expect(queryByText('Maria')).toBeNull();
    });
});