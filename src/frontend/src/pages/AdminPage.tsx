import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { LogIn, LogOut, Shield, Users } from "lucide-react";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import { useGetAllSubmissions } from "../hooks/useQueries";

export default function AdminPage() {
  const { identity, login, clear, isInitializing, isLoggingIn } =
    useInternetIdentity();
  const isLoggedIn = !!identity && !identity.getPrincipal().isAnonymous();

  if (isInitializing) {
    return (
      <div className="min-h-screen bg-admin-bg flex items-center justify-center">
        <Skeleton className="h-12 w-48" />
      </div>
    );
  }

  if (!isLoggedIn) {
    return (
      <div className="min-h-screen bg-admin-bg flex items-center justify-center p-4">
        <div className="w-full max-w-md text-center space-y-8">
          <div className="space-y-3">
            <div className="flex justify-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 border-2 border-primary/30 flex items-center justify-center">
                <Shield className="w-8 h-8 text-primary" />
              </div>
            </div>
            <h1 className="font-display text-2xl font-bold text-foreground">
              Sri Nandhivarman Silambatta Kalari Kazhagam
            </h1>
            <p className="text-muted-foreground text-sm">
              Admin — View Enrollment Submissions
            </p>
          </div>

          <Card className="border-border/60 shadow-lg">
            <CardContent className="pt-6 pb-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Log in with Internet Identity to access the admin dashboard and
                review all enrollment form submissions.
              </p>
              <Button
                data-ocid="admin.login_button"
                className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                onClick={() => login()}
                disabled={isLoggingIn}
              >
                {isLoggingIn ? (
                  <span className="flex items-center gap-2">
                    <span className="h-4 w-4 border-2 border-primary-foreground/40 border-t-primary-foreground rounded-full animate-spin" />
                    Logging in...
                  </span>
                ) : (
                  <span className="flex items-center gap-2">
                    <LogIn className="w-4 h-4" />
                    Login with Internet Identity
                  </span>
                )}
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    );
  }

  return <SubmissionsView onLogout={() => clear()} />;
}

function SubmissionsView({ onLogout }: { onLogout: () => void }) {
  const { data: submissions, isLoading, isError } = useGetAllSubmissions();

  return (
    <div className="min-h-screen bg-admin-bg">
      {/* Admin Header */}
      <header className="bg-card border-b border-border/60 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="font-display font-bold text-foreground text-lg leading-tight">
                Enrollment Submissions
              </h1>
              <p className="text-xs text-muted-foreground">SNSKK Admin Panel</p>
            </div>
          </div>
          <Button
            data-ocid="admin.logout_button"
            variant="outline"
            size="sm"
            onClick={onLogout}
            className="flex items-center gap-2 text-muted-foreground hover:text-foreground"
          >
            <LogOut className="w-4 h-4" />
            Logout
          </Button>
        </div>
      </header>

      {/* Main content */}
      <main className="max-w-6xl mx-auto px-4 py-8 space-y-6">
        {/* Stats bar */}
        {!isLoading && !isError && submissions && (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Users className="w-4 h-4" />
              <span>
                <span className="font-semibold text-foreground">
                  {submissions.length}
                </span>{" "}
                {submissions.length === 1 ? "submission" : "submissions"}
              </span>
            </div>
            {submissions.length > 0 && (
              <Badge variant="secondary" className="text-xs">
                Latest
              </Badge>
            )}
          </div>
        )}

        {/* Loading state */}
        {isLoading && (
          <div data-ocid="admin.loading_state" className="space-y-3">
            {[1, 2, 3].map((n) => (
              <Skeleton key={n} className="h-16 w-full rounded-lg" />
            ))}
          </div>
        )}

        {/* Error state */}
        {isError && (
          <div
            data-ocid="admin.error_state"
            className="text-center py-16 text-destructive"
          >
            <p className="font-medium">Failed to load submissions.</p>
            <p className="text-sm text-muted-foreground mt-1">
              Please refresh and try again.
            </p>
          </div>
        )}

        {/* Empty state */}
        {!isLoading && !isError && submissions?.length === 0 && (
          <div
            data-ocid="admin.empty_state"
            className="text-center py-20 space-y-3"
          >
            <div className="w-14 h-14 rounded-full bg-muted mx-auto flex items-center justify-center">
              <Users className="w-6 h-6 text-muted-foreground" />
            </div>
            <h3 className="font-semibold text-foreground">
              No submissions yet
            </h3>
            <p className="text-sm text-muted-foreground max-w-xs mx-auto">
              Enrollment form submissions from your website will appear here.
            </p>
          </div>
        )}

        {/* Submissions list */}
        {!isLoading && !isError && submissions && submissions.length > 0 && (
          <>
            {/* Desktop table */}
            <div className="hidden md:block">
              <Card className="border-border/60 shadow-sm overflow-hidden">
                <Table data-ocid="admin.table">
                  <TableHeader>
                    <TableRow className="bg-muted/40">
                      <TableHead className="font-semibold text-foreground w-10">
                        #
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Name
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Email
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Phone
                      </TableHead>
                      <TableHead className="font-semibold text-foreground">
                        Message
                      </TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {submissions.map((sub, position) => (
                      <TableRow
                        key={`${sub.email}-${sub.name}-${position}`}
                        data-ocid={`admin.row.${position + 1}`}
                        className="hover:bg-muted/20 transition-colors"
                      >
                        <TableCell className="text-muted-foreground text-sm">
                          {position + 1}
                        </TableCell>
                        <TableCell className="font-medium text-foreground">
                          {sub.name}
                        </TableCell>
                        <TableCell>
                          <a
                            href={`mailto:${sub.email}`}
                            className="text-primary hover:underline"
                          >
                            {sub.email}
                          </a>
                        </TableCell>
                        <TableCell>
                          <a
                            href={`tel:${sub.phone}`}
                            className="text-foreground hover:text-primary"
                          >
                            {sub.phone}
                          </a>
                        </TableCell>
                        <TableCell className="text-muted-foreground max-w-xs truncate">
                          {sub.message}
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </Card>
            </div>

            {/* Mobile card list */}
            <div className="md:hidden space-y-3">
              {submissions.map((sub, position) => (
                <Card
                  key={`${sub.email}-${sub.name}-${position}`}
                  data-ocid={`admin.item.${position + 1}`}
                  className="border-border/60 shadow-sm"
                >
                  <CardHeader className="pb-2 pt-4 px-4">
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-base font-semibold text-foreground">
                        {sub.name}
                      </CardTitle>
                      <Badge
                        variant="outline"
                        className="text-xs text-muted-foreground"
                      >
                        #{position + 1}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="px-4 pb-4 space-y-2 text-sm">
                    <div className="flex gap-2">
                      <span className="text-muted-foreground w-14 shrink-0">
                        Email
                      </span>
                      <a
                        href={`mailto:${sub.email}`}
                        className="text-primary hover:underline truncate"
                      >
                        {sub.email}
                      </a>
                    </div>
                    <div className="flex gap-2">
                      <span className="text-muted-foreground w-14 shrink-0">
                        Phone
                      </span>
                      <a href={`tel:${sub.phone}`} className="text-foreground">
                        {sub.phone}
                      </a>
                    </div>
                    {sub.message && (
                      <div className="flex gap-2">
                        <span className="text-muted-foreground w-14 shrink-0">
                          Message
                        </span>
                        <span className="text-foreground">{sub.message}</span>
                      </div>
                    )}
                  </CardContent>
                </Card>
              ))}
            </div>
          </>
        )}
      </main>
    </div>
  );
}
