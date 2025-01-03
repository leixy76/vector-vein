/**
 * @Author: Bi Ying
 * @Date:   2024-04-15 12:02:48
 * @Last Modified by:   Bi Ying
 * @Last Modified time: 2024-06-17 19:40:42
 */
export function createTemplateData() {
  return {
    "description": "description",
    "task_name": "media_processing.gemini_vision",
    "has_inputs": true,
    "template": {
      "text_prompt": {
        "required": true,
        "placeholder": "",
        "show": false,
        "value": "",
        "name": "text_prompt",
        "display_name": "text_prompt",
        "type": "str",
        "list": false,
        "field_type": "textarea"
      },
      "llm_model": {
        "required": false,
        "placeholder": "",
        "show": false,
        "value": "gemini-1.5-pro",
        "options": [
          {
            "value": "gemini-2.0-flash-exp",
            "label": "gemini-2.0-flash-exp"
          },
          {
            "value": "gemini-2.0-flash-thinking-exp-1219",
            "label": "gemini-2.0-flash-thinking-exp-1219"
          },
          {
            "value": "gemini-exp-1206",
            "label": "gemini-exp-1206"
          },
          {
            "value": "gemini-1.5-flash",
            "label": "gemini-1.5-flash"
          },
          {
            "value": "gemini-1.0-pro",
            "label": "gemini-1.0-pro"
          },
          {
            "value": "gemini-1.5-pro",
            "label": "gemini-1.5-pro"
          }
        ],
        "name": "llm_model",
        "display_name": "llm_model",
        "type": "str",
        "clear_after_run": false,
        "list": true,
        "field_type": "select"
      },
      "images_or_urls": {
        "required": false,
        "placeholder": "",
        "show": false,
        "value": "images",
        "options": [
          {
            "value": "images",
            "label": "images"
          },
          {
            "value": "urls",
            "label": "urls"
          },
        ],
        "name": "images_or_urls",
        "display_name": "images_or_urls",
        "type": "str",
        "clear_after_run": false,
        "list": true,
        "field_type": "radio"
      },
      "images": {
        "required": true,
        "placeholder": "",
        "show": true,
        "value": [],
        "name": "images",
        "display_name": "images",
        "type": "str",
        "list": false,
        "field_type": "file",
        "support_file_types": ".jpg, .jpeg, .png, .webp",
        "condition": (fieldsData) => {
          return fieldsData.images_or_urls.value == 'images'
        }
      },
      "urls": {
        "required": true,
        "placeholder": "",
        "show": false,
        "value": "",
        "name": "urls",
        "display_name": "urls",
        "type": "str",
        "list": false,
        "field_type": "input",
        "condition": (fieldsData) => {
          return fieldsData.images_or_urls.value == 'urls'
        },
      },
      "output": {
        "required": true,
        "placeholder": "",
        "show": false,
        "value": "",
        "name": "output",
        "display_name": "output",
        "type": "str",
        "list": false,
        "field_type": "",
        "is_output": true
      },
    }
  }
}