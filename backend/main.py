from fastapi import FastAPI, Form, UploadFile, File
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# Allow frontend to communicate with backend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


@app.get("/")
def home():
    return {"message": "AskMyNotes Backend is running!"}


@app.post("/ask")
async def ask(
    question: str = Form(...),
    file: UploadFile | None = File(None)
):
    print("Question received:", question)

    if file:
        print("File received:", file.filename)

    return {
        "message": "Backend received successfully!",
        "question": question,
        "file": file.filename if file else None
    }