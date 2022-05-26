import { useQuery, gql } from "@apollo/client";

const GET_VEHICULE = gql`
  query vehicle($vehicleId: Int!) {
    vehicle(vehicleId: $vehicleId) {
      key: id
      brand
      kind
      regnum
      serienum
      year
      type
      places
      milage
      oilchange
      techcontrol
      assurance
    }
  }
`;

export const GET_DRIVER = gql`
  query driver($NIDN: String!) {
    driver(NIDN: $NIDN) {
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
// mission ...
const GET_MISSION = gql`
  query Mission($missionId: Int!) {
    mission(missionId: $missionId) {
      id
      ref
      creator_name
      creator_phone
      created_at
      missionary_name
      missionary_phone
      direction
      direction
      department
      object
      departure_date
      departure_location
      departure_location_type
      destination_location
      destination_location_type
      arrival_date
      arrival_location
      arrival_location_type
      duration
      persons_number
      expenses
      trasportation_medium
      manager_validation
      manager_validator_name
      manager_validator_phone
      resources_validation
      resources_validator_name
      resources_validator_phone
      vehicle_name
      driver_name
      driver_phone
      authorization
      authorizor_name
      authorizor_phone
      status
    }
  }
`;
export const useVehicule = (vehicleId) => {
  const { data, error, loading } = useQuery(GET_VEHICULE, {
    variables: {
      vehicleId,
    },
  });

  return { data, error, loading };
};

export const useDriver = (NIDN) => {
  const { data, error, loading, refetch } = useQuery(GET_DRIVER, {
    variables: {
      NIDN,
    },
  });

  return { data, error, loading, refetch };
};

export const useMission = (missionId) => {
  const { data, error, loading } = useQuery(GET_MISSION, {
    variables: {
      missionId,
    },
  });

  return { data, error, loading };
};
