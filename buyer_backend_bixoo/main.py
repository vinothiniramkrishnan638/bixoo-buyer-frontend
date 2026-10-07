from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from routers import categories, products, requirements

app = FastAPI(title="BIXOO Buyer Backend")

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Tables are created and owned by schema.sql (run directly in MySQL), not by
# this app - so anyone on the team can open MySQL Workbench and edit the
# table structure without touching Python code. This app only reads/writes rows.

app.include_router(categories.router)
app.include_router(products.router)
app.include_router(requirements.router)


@app.get("/")
def health_check():
    return {"status": "ok", "service": "BIXOO Buyer Backend (MySQL, layered)"}


# Run with: uvicorn main:app --reload
# Then open: http://127.0.0.1:8000/docs
