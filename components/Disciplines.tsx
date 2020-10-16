import { useState } from "react";
import { useQuery } from "@apollo/react-hooks";
import * as _ from "lodash";
import { disciplinesGraphQL } from "../graphql/queries/disciplines";
import { Button, Table, Input, Space } from "antd";
import { ColumnsType } from "antd/lib/table";
import { CheckOutlined, SearchOutlined } from "@ant-design/icons";
import styled from "styled-components";
import { Loading } from "./notify/Loading";
import { Error } from "./notify/Error";
import { TabWarning } from "./notify/Warning";
import { CreateDisciplineForm } from "./CreateDisciplineForm";
import { UpdateDisciplineForm } from "./UpdateDisciplineForm";
import Highlighter from "react-highlight-words";

type DisciplinesProps = {
  id: any;
  legalBusinessName: string;
};

const StyledNewButton = styled(Button)`
  ${({ theme }) => `
    margin-bottom: ${theme["margin-small"]};
    width: auto;
  `}
`;

const StyledError = styled(Error)`
  ${({ theme }) => `
    .ant-col {
      margin-top: 0;
    }
  `}
`;

const StyledTable = styled(Table)`
  ${({ theme }) => `
    max-width: 1000px;
  `}
`;

export const Disciplines = ({ id, legalBusinessName }: DisciplinesProps) => {
  const [disciplineListInfo, setDisciplineListInfo] = useState({
    isInitialized: true,
    disciplineList: [],
  });
  const [search, setSearch] = useState({ searchText: "", searchedColumn: "" });

  const [currentDisciplineId, setCurrentDisciplineId] = useState(null);
  const [showNew, setShowNew] = useState(false);
  const [showUpdate, setShowUpdate] = useState(false);

  const { loading: isQueryLoading, data, error } = useQuery(
    disciplinesGraphQL,
    {
      variables: { where: { company: { id } } },
    }
  );

  if (isQueryLoading) return <Loading />;
  if (error || !data) return <StyledError errorText={`${error}`} />;

  let searchInput = null;

  const getColumnSearchProps = (dataIndex) => ({
    filterDropdown: ({
      setSelectedKeys,
      selectedKeys,
      confirm,
      clearFilters,
    }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={(node) => {
            searchInput = node;
          }}
          placeholder={`Search ${dataIndex}`}
          value={selectedKeys[0]}
          onChange={(e) =>
            setSelectedKeys(e.target.value ? [e.target.value] : [])
          }
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: "block" }}
        />
        <Space>
          <Button
            type="primary"
            onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
            icon={<SearchOutlined />}
            size="small"
            style={{ width: 90 }}
          >
            Search
          </Button>
          <Button
            onClick={() => handleReset(clearFilters)}
            size="small"
            style={{ width: 90 }}
          >
            Reset
          </Button>
        </Space>
      </div>
    ),
    filterIcon: (filtered) => (
      <SearchOutlined style={{ color: filtered ? "#1890ff" : undefined }} />
    ),
    onFilter: (value, record) => {
      let searchIndex = dataIndex;
      if (dataIndex === "renderName") {
        searchIndex = "name";
      }
      return record[searchIndex]
        .toString()
        .toLowerCase()
        .includes(value.toLowerCase());
    },
    onFilterDropdownVisibleChange: (visible) => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: (text) => {
      return search.searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: "#ffc069", padding: 0 }}
          searchWords={[search.searchText]}
          autoEscape
          textToHighlight={text.toString()}
        />
      ) : (
        text
      );
    },
  });

  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    let searchIndex = dataIndex;
    if (dataIndex === "renderName") {
      searchIndex = "name";
    }

    setDisciplineListInfo((state) => ({
      ...state,
      isInitialized: false,
      disciplineList: [
        ...(sortedDisciplinesList = sortedDisciplinesList.filter(
          (dicipline) => {
            if (
              searchIndex === "name" &&
              dicipline.name
                .toUpperCase()
                .includes(selectedKeys[0].toUpperCase())
            ) {
              return dicipline;
            }
          }
        )),
      ],
    }));
  };

  const handleReset = (clearFilters) => {
    clearFilters();
    setDisciplineListInfo((state) => ({
      ...state,
      disciplineList: [...sortedDisciplinesList],
    }));
  };

  let disciplinesList = _.map(data.disciplines, (value) =>
    _.get(value, "disciplines", value)
  ).map((dg) => ({
    ...dg,
    key: dg.id,
    name: dg.name,
    renderName: <a onClick={(e) => handleEditClick(dg.id)}>{dg.name}</a>,
    abbreviation: dg.abbreviation,
  }));

  let sortedDisciplinesList = _.sortBy(disciplinesList, ["name"]);

  const handleNewClick = () => {
    setShowNew(true);
  };

  const handleCancelCreateNew = () => {
    setShowNew(false);
  };

  const handleEditClick = (disciplineId: any) => {
    setCurrentDisciplineId(disciplineId);
    setShowUpdate(true);
  };

  const handleEditCancel = () => {
    setShowUpdate(false);
  };

  interface Discipline {
    key: "id";
    title: "name";
    dataIndex: "id";
    name: "name";
    abbreviation: "abbreviation";
  }

  const columns: ColumnsType<Discipline> = [
    {
      title: "Discipline ",
      dataIndex: "renderName",
      key: "name",
      ...getColumnSearchProps("renderName"),
    },
    {
      title: "Abbreviation",
      dataIndex: "abbreviation",
      key: "abbreviation",
      responsive: ["sm"],
    },
  ];

  const DisciplinesUI = () => {
    if (showNew) {
      return (
        <CreateDisciplineForm id={id} handleCancel={handleCancelCreateNew} />
      );
    } else if (showUpdate) {
      return (
        <UpdateDisciplineForm
          id={id}
          disciplineId={currentDisciplineId}
          handleCancel={handleEditCancel}
        />
      );
    } else {
      if (sortedDisciplinesList.length === 0) {
        return (
          <>
            <StyledNewButton block type="primary" onClick={handleNewClick}>
              Add Discipline
            </StyledNewButton>
            <TabWarning
              warningHeader="No Discipline "
              warningText="This company has not had any Disciplines added yet."
            />
          </>
        );
      }

      return (
        <>
          <StyledNewButton block type="primary" onClick={handleNewClick}>
            Add Discipline
          </StyledNewButton>
          <StyledTable
            columns={columns}
            dataSource={
              disciplineListInfo.isInitialized
                ? sortedDisciplinesList
                : disciplineListInfo.disciplineList
            }
            pagination={{ position: ["topLeft", "bottomRight"] }}
          />
        </>
      );
    }
  };

  return (
    <>
      <DisciplinesUI />
    </>
  );
};
