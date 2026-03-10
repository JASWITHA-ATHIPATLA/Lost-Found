import React from "react";
import styled from "styled-components";
import { X } from "lucide-react";

const Modal = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
  padding: 20px;
`;

const FormContainer = styled.div`
  background: white;
  border-radius: 12px;
  max-width: 600px;
  width: 100%;
  max-height: 90vh;
  overflow-y: auto;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
`;

const FormHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border-bottom: 1px solid #e5e7eb;

  h2 {
    margin: 0;
    font-size: 24px;
    font-weight: 600;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    padding: 8px;
    border-radius: 6px;
    transition: background 0.2s;

    &:hover {
      background: #f3f4f6;
    }
  }
`;

const Form = styled.form`
  padding: 20px;
`;

const FormGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-bottom: 16px;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  label {
    font-weight: 500;
    font-size: 14px;
    color: #374151;
  }

  input,
  select,
  textarea {
    padding: 10px 12px;
    border: 1px solid #d1d5db;
    border-radius: 6px;
    font-size: 14px;
    transition: border-color 0.2s;

    &:focus {
      outline: none;
      border-color: #3b82f6;
    }
  }

  textarea {
    resize: vertical;
    font-family: inherit;
  }
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 16px;

  label {
    display: flex;
    align-items: center;
    gap: 8px;
    cursor: pointer;

    input {
      width: auto;
    }

    span {
      padding: 6px 12px;
      border-radius: 6px;
      font-weight: 500;
      font-size: 14px;

      &.lost {
        background: #fef2f2;
        color: #dc2626;
      }

      &.found {
        background: #f0fdf4;
        color: #16a34a;
      }
    }
  }
`;

const ImagePreview = styled.img`
  width: 100%;
  max-height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-top: 12px;
`;

const SubmitButton = styled.button`
  width: 100%;
  padding: 12px;
  background: #3b82f6;
  color: white;
  border: none;
  border-radius: 8px;
  font-weight: 600;
  cursor: pointer;
  transition: background 0.2s;

  &:hover {
    background: #2563eb;
  }
`;

const PostItemForm = ({ formData, setFormData, onSubmit, onClose, categories }) => {
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onloadend = () => {
      setFormData((prev) => ({
        ...prev,
        image: file,
        imagePreview: reader.result,
      }));
    };
    reader.readAsDataURL(file);
  };

  return (
    <Modal onClick={onClose}>
      <FormContainer onClick={(e) => e.stopPropagation()}>
        <FormHeader>
          <h2>Post an Item</h2>
          <button type="button" onClick={onClose}>
            <X />
          </button>
        </FormHeader>

        <Form onSubmit={onSubmit}>
          <FormGrid>
            <FormGroup>
              <label>Type *</label>
              <RadioGroup>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="lost"
                    checked={formData.type === "lost"}
                    onChange={handleInputChange}
                  />
                  <span className="lost">Lost</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="type"
                    value="found"
                    checked={formData.type === "found"}
                    onChange={handleInputChange}
                  />
                  <span className="found">Found</span>
                </label>
              </RadioGroup>
            </FormGroup>

            <FormGroup>
              <label>Item Name *</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Category *</label>
              <select
                name="category"
                value={formData.category}
                onChange={handleInputChange}
              >
                {categories.map((c) => (
                  <option key={c}>{c}</option>
                ))}
              </select>
            </FormGroup>

            <FormGroup>
              <label>Location *</label>
              <input
                name="location"
                value={formData.location}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Date *</label>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleInputChange}
              />
            </FormGroup>

            <FormGroup>
              <label>Your Name *</label>
              <input
                name="contactName"
                value={formData.contactName}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
            </FormGroup>

            <FormGroup>
              <label>Phone (optional)</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
              />
            </FormGroup>
          </FormGrid>

          <FormGroup>
            <label>Description *</label>
            <textarea
              rows="3"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              required
            />
          </FormGroup>

          <FormGroup>
            <label>Upload Image</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleImageUpload}
            />
            {formData.imagePreview && (
              <ImagePreview src={formData.imagePreview} alt="preview" />
            )}
          </FormGroup>

          <SubmitButton type="submit">Submit Post</SubmitButton>
        </Form>
      </FormContainer>
    </Modal>
  );
};

export default PostItemForm;