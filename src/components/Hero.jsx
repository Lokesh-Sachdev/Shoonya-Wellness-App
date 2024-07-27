import { getData } from "@/services/api";
import { useRouter } from "next/router";
import useSWR from "swr";
import {
  Filter,
  Header,
  Pagination,
  RetreatList,
  SearchBar,
  SkeletonCard,
} from ".";

const Home = () => {
  const router = useRouter();
  const { query } = router;

  const { search, filter, location, page, perPage = 5 } = query;

  const {
    data: retreats,
    error,
    isLoading,
  } = useSWR(["retreats", query], () => getData(query));

  const handleSearch = (searchTerm) => {
    router.push({
      pathname: "/",
      query: { ...query, search: searchTerm, page: 1 },
    });
  };

  const handlePagination = (newPage) => {
    router.push({
      pathname: "/",
      query: { ...query, page: newPage },
    });
  };

  const renderContent = () => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[...Array(6)].map((_, index) => (
            <SkeletonCard key={index} />
          ))}
        </div>
      );
    }

    if (error) {
      return (
        <div className="text-center mt-8 text-red-500">
          <p>Failed to load retreats. Please try again later.</p>
          <button
            onClick={() => router.reload()}
            className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Retry
          </button>
        </div>
      );
    }

    if (!retreats || retreats.length === 0) {
      return <div className="text-center mt-8">No retreats found.</div>;
    }

    return <RetreatList retreats={retreats} />;
  };

  return (
    <>
      <Header />
      <div className="flex flex-wrap gap-4 container mx-auto mt-4">
        <Filter router={router} />
        <SearchBar onSearch={handleSearch} search={search} router={router} />
      </div>
      {renderContent()}
      <Pagination
        perPage={Number(perPage)}
        total={retreats?.length || 0}
        paginate={handlePagination}
        currentPage={Number(page)}
      />
    </>
  );
};

export default Home;
