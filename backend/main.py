from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine, Base
from routes import router

# Create tables on startup
Base.metadata.create_all(bind=engine)

app = FastAPI(title="Simple Notes API", version="1.0.0")

# CORS - allow frontend (must be first middleware)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173", "http://127.0.0.1:5173"],
    allow_credentials=True,
    allow_methods=["GET", "POST", "DELETE", "OPTIONS"],
    allow_headers=["*"],
)

import os
from fastapi.staticfiles import StaticFiles
from fastapi.responses import FileResponse

app.include_router(router)

# Serve static files from frontend/dist
frontend_dist = os.path.join(os.path.dirname(__file__), "..", "frontend", "dist")
if os.path.isdir(frontend_dist):
    app.mount("/assets", StaticFiles(directory=os.path.join(frontend_dist, "assets")), name="assets")
    
    @app.get("/")
    async def serve_index():
        return FileResponse(os.path.join(frontend_dist, "index.html"))
    
    # Optional: Catch-all route for SPA routing if needed (make sure it doesn't conflict with /notes)
    # @app.get("/{catchall:path}")
    # async def serve_spa(catchall: str):
    #     return FileResponse(os.path.join(frontend_dist, "index.html"))
else:
    @app.get("/")
    def root():
        return {"message": "Simple Notes API is running. Frontend not built yet."}
