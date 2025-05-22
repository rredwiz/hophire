import SearchBar from "./SearchBar";
import SearchTitle from "./SearchTitle";
import JobCard from "./JobCard";

export default function SearchBody() {
    return (
        <>
            <div className="flex flex-col justify-center items-center mt-15">
                <SearchTitle />
                <SearchBar />
                <div className="grid grid-cols-3 gap-10 mt-30">
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                    <JobCard />
                </div>
            </div>
        </>
    );
}
