import { useQuery, gql } from "@apollo/client";

const GET_VEHICULES = gql`
  query vehicles($offset: Int!, $limit: Int!) {
    vehicles(offset: $offset, limit: $limit) {
      key: id
      kind
      brand
      regnum
      serienum
      type
      status
    }
    vehiclesCount
  }
`;

const GET_DRIVERS = gql`
  query drivers($offset: Int!, $limit: Int!) {
    drivers(offset: $offset, limit: $limit) {
      key: id
      NIDN
      firstname
      lastname
      direction
      driver_status
    }
    driversCount
  }
`;

// get missions ...

const GET_MISSIONS = gql`
  query Missions($offset: Int!, $limit: Int!, $filters: MissionFilterInput!) {
    missions(offset: $offset, limit: $limit, filters: $filters) {
      key: id
      ref
      missionary_name
      creator_name
      missionary_phone
      departure_date
      destination_location_type
      trasportation_medium
      expenses
      resources_validation
      created_at
    }
    missionsCount(filters: $filters)
  }
`;

// get missions ...

export const useDrivers = (offset, limit) => {
  const { data, error, loading } = useQuery(GET_DRIVERS, {
    variables: {
      offset,
      limit,
    },
  });

  return { data, error, loading };
};

export const useVehicules = (offset, limit) => {
  const { data, error, loading } = useQuery(GET_VEHICULES, {
    variables: {
      offset,
      limit,
    },
  });

  return { data, error, loading };
};

export const useMissions = (offset, limit, filters) => {
  const { data, error, loading } = useQuery(GET_MISSIONS, {
    variables: {
      offset,
      limit,
      filters,
    },
  });

  return { data, error, loading };
};
