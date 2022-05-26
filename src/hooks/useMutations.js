import { gql, useMutation } from "@apollo/client";

const UPDATE_DRIVER = gql`
  mutation updateDriver($NIDN: String, $driver: DriverUpdateInput) {
    updateDriver(NIDN: $NIDN, driver: $driver) {
      id
      NIDN
      firstname
      lastname
      email
      direction
      phone
      driver_status
      account_status
    }
  }
`;

export const useEditDriver = (NIDN, driver) => {
  const { data, error, loading } = useMutation(UPDATE_DRIVER, {
    variables: {
      NIDN,
      driver,
    },
  });

  return { data, error, loading };
};
