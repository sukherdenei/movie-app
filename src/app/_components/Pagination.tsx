"use client";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { useSearchParams, useRouter } from "next/navigation";

export function PaginationDemo({
  searchParams,
}: {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>;
}) {
  const searchParamsObj = useSearchParams();
  const page = searchParamsObj.get("page") || "1";
  const router = useRouter();

  const handlePageChange = (newPage: number) => {
    router.push(`?page=${newPage}`);
  };

  return (
    <Pagination>
      <PaginationContent>
        <PaginationItem>
          <PaginationPrevious
            href="#"
            onClick={() => handlePageChange(Number(page) - 1)}
          />
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handlePageChange(1)}
            isActive={Number(page) === 1}
          >
            1
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handlePageChange(2)}
            isActive={Number(page) === 2}
          >
            2
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationLink
            href="#"
            onClick={() => handlePageChange(3)}
            isActive={Number(page) === 3}
          >
            3
          </PaginationLink>
        </PaginationItem>

        <PaginationItem>
          <PaginationNext
            href="#"
            onClick={() => handlePageChange(Number(page) + 1)}
          />
        </PaginationItem>
      </PaginationContent>
    </Pagination>
  );
}
