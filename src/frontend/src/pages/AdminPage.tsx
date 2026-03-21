import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Skeleton } from "@/components/ui/skeleton";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Images,
  Loader2,
  LogIn,
  LogOut,
  Shield,
  Trash2,
  Upload,
  Users,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { useInternetIdentity } from "../hooks/useInternetIdentity";
import {
  useAddGalleryPhoto,
  useGetAllGalleryPhotos,
  useGetAllSubmissions,
  useRemoveGalleryPhoto,
} from "../hooks/useQueries";
import { getBlobUrl } from "../utils/blobStorage";

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
            <p className="text-muted-foreground text-sm">Admin Panel</p>
          </div>

          <Card className="border-border/60 shadow-lg">
            <CardContent className="pt-6 pb-6 space-y-4">
              <p className="text-sm text-muted-foreground">
                Log in with Internet Identity to access the admin dashboard,
                manage gallery photos, and review enrollment submissions.
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

  return <AdminDashboard onLogout={() => clear()} />;
}

function AdminDashboard({ onLogout }: { onLogout: () => void }) {
  return (
    <div className="min-h-screen bg-admin-bg">
      <header className="bg-card border-b border-border/60 sticky top-0 z-10 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
              <Shield className="w-4 h-4 text-primary" />
            </div>
            <div>
              <h1 className="font-display font-bold text-foreground text-lg leading-tight">
                SNSKK Admin Panel
              </h1>
              <p className="text-xs text-muted-foreground">
                Manage your academy
              </p>
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

      <main className="max-w-6xl mx-auto px-4 py-8">
        <Tabs defaultValue="gallery" className="space-y-6">
          <TabsList
            data-ocid="admin.tab"
            className="bg-muted/60 border border-border/40"
          >
            <TabsTrigger
              value="gallery"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Images className="w-4 h-4" />
              Gallery
            </TabsTrigger>
            <TabsTrigger
              value="enrollments"
              className="flex items-center gap-2 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
            >
              <Users className="w-4 h-4" />
              Enrollments
            </TabsTrigger>
          </TabsList>

          <TabsContent value="gallery">
            <GalleryTab />
          </TabsContent>

          <TabsContent value="enrollments">
            <SubmissionsTab />
          </TabsContent>
        </Tabs>
      </main>
    </div>
  );
}

function GalleryTab() {
  const { data: photos, isLoading, isError } = useGetAllGalleryPhotos();
  const addPhoto = useAddGalleryPhoto();
  const removePhoto = useRemoveGalleryPhoto();
  const [caption, setCaption] = useState("");
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewUrl, setPreviewUrl] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setSelectedFile(file);
    setPreviewUrl(URL.createObjectURL(file));
  };

  const handleUpload = async () => {
    if (!selectedFile) return;
    try {
      await addPhoto.mutateAsync({ file: selectedFile, caption });
      toast.success("Photo uploaded successfully!");
      setSelectedFile(null);
      setCaption("");
      setPreviewUrl(null);
    } catch {
      toast.error("Failed to upload photo. Please try again.");
    }
  };

  const handleDelete = async (id: bigint) => {
    try {
      await removePhoto.mutateAsync(id);
      toast.success("Photo removed.");
    } catch {
      toast.error("Failed to remove photo.");
    }
  };

  return (
    <div className="space-y-8">
      <Card className="border-border/60 shadow-sm">
        <CardHeader className="pb-3">
          <CardTitle className="text-base font-semibold text-foreground flex items-center gap-2">
            <Upload className="w-4 h-4 text-primary" />
            Upload New Photo
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <label
            htmlFor="gallery-file-input"
            data-ocid="gallery.dropzone"
            className="block border-2 border-dashed border-border/60 rounded-xl p-6 text-center cursor-pointer hover:border-primary/60 hover:bg-primary/5 transition-colors"
          >
            {previewUrl ? (
              <div className="flex flex-col items-center gap-3">
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="max-h-48 rounded-lg object-contain"
                />
                <p className="text-sm text-muted-foreground">
                  {selectedFile?.name} —{" "}
                  <span className="text-primary underline">Change</span>
                </p>
              </div>
            ) : (
              <div className="flex flex-col items-center gap-3 py-4">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                  <Images className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <p className="text-sm font-medium text-foreground">
                    Click to select a photo
                  </p>
                  <p className="text-xs text-muted-foreground mt-1">
                    JPG, PNG, WebP supported
                  </p>
                </div>
              </div>
            )}
          </label>

          <input
            id="gallery-file-input"
            type="file"
            accept="image/*"
            className="sr-only"
            onChange={handleFileChange}
            data-ocid="gallery.upload_button"
          />

          <div className="space-y-2">
            <Label htmlFor="caption" className="text-sm font-medium">
              Caption (optional)
            </Label>
            <Input
              id="caption"
              data-ocid="gallery.input"
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              placeholder="e.g. State Championship 2025"
              className="border-border/60"
            />
          </div>

          <Button
            data-ocid="gallery.primary_button"
            onClick={handleUpload}
            disabled={!selectedFile || addPhoto.isPending}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
          >
            {addPhoto.isPending ? (
              <span className="flex items-center gap-2">
                <Loader2 className="w-4 h-4 animate-spin" />
                Uploading...
              </span>
            ) : (
              <span className="flex items-center gap-2">
                <Upload className="w-4 h-4" />
                Upload Photo
              </span>
            )}
          </Button>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <h3 className="font-semibold text-foreground">
          Uploaded Photos
          {photos && photos.length > 0 && (
            <Badge variant="secondary" className="ml-2 text-xs">
              {photos.length}
            </Badge>
          )}
        </h3>

        {isLoading && (
          <div
            data-ocid="gallery.loading_state"
            className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
          >
            {[1, 2, 3, 4].map((n) => (
              <Skeleton key={n} className="aspect-square rounded-xl" />
            ))}
          </div>
        )}

        {isError && (
          <div
            data-ocid="gallery.error_state"
            className="text-center py-12 text-destructive"
          >
            <p className="font-medium">Failed to load photos.</p>
          </div>
        )}

        {!isLoading && !isError && photos?.length === 0 && (
          <div
            data-ocid="gallery.empty_state"
            className="text-center py-16 space-y-3 border-2 border-dashed border-border/40 rounded-xl"
          >
            <div className="w-12 h-12 rounded-full bg-muted mx-auto flex items-center justify-center">
              <Images className="w-5 h-5 text-muted-foreground" />
            </div>
            <p className="text-sm text-muted-foreground">
              No photos uploaded yet. Upload your first photo above!
            </p>
          </div>
        )}

        {!isLoading && !isError && photos && photos.length > 0 && (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {photos.map((photo, index) => (
              <div
                key={photo.id.toString()}
                data-ocid={`gallery.item.${index + 1}`}
                className="relative group rounded-xl overflow-hidden aspect-square border border-border/40 shadow-sm"
              >
                <img
                  src={getBlobUrl(photo.blobId)}
                  alt={photo.caption || "Gallery photo"}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex flex-col items-center justify-center gap-2 p-2">
                  {photo.caption && (
                    <p className="text-white text-xs font-medium text-center line-clamp-2">
                      {photo.caption}
                    </p>
                  )}
                  <Button
                    data-ocid={`gallery.delete_button.${index + 1}`}
                    size="sm"
                    variant="destructive"
                    className="h-8 px-3 text-xs"
                    disabled={removePhoto.isPending}
                    onClick={() => handleDelete(photo.id)}
                  >
                    {removePhoto.isPending ? (
                      <Loader2 className="w-3 h-3 animate-spin" />
                    ) : (
                      <>
                        <Trash2 className="w-3 h-3 mr-1" />
                        Delete
                      </>
                    )}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

function SubmissionsTab() {
  const { data: submissions, isLoading, isError } = useGetAllSubmissions();

  return (
    <div className="space-y-6">
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

      {isLoading && (
        <div data-ocid="admin.loading_state" className="space-y-3">
          {[1, 2, 3].map((n) => (
            <Skeleton key={n} className="h-16 w-full rounded-lg" />
          ))}
        </div>
      )}

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

      {!isLoading && !isError && submissions?.length === 0 && (
        <div
          data-ocid="admin.empty_state"
          className="text-center py-20 space-y-3"
        >
          <div className="w-14 h-14 rounded-full bg-muted mx-auto flex items-center justify-center">
            <Users className="w-6 h-6 text-muted-foreground" />
          </div>
          <h3 className="font-semibold text-foreground">No submissions yet</h3>
          <p className="text-sm text-muted-foreground max-w-xs mx-auto">
            Enrollment form submissions from your website will appear here.
          </p>
        </div>
      )}

      {!isLoading && !isError && submissions && submissions.length > 0 && (
        <>
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
    </div>
  );
}
