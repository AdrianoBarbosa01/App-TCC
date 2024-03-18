import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
        backgroundColor: '#fff',
    },
    barbershopName: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20,
    },
    searchInput: {
        height: 40,
        borderColor: '#ccc',
        borderWidth: 1,
        borderRadius: 5,
        paddingHorizontal: 10,
    },
    servicesContainer: {
        marginTop: '40%'
    },
    serviceItem: {
        flex: 1,
        margin: 15,
        alignItems: 'center',
    },
    serviceImage: {
        backgroundColor: '#9088',
        width: 100,
        height: 100,
        borderRadius: 10,

    },
    serviceName: {
        marginTop: 10,
        fontSize: 16,
        fontWeight: 'bold',
        textAlign: 'center',
    },
});